import { createContext, useContext } from 'react';
import { BehaviorSubject, map } from 'rxjs';

export interface FrontendInfo {
    header: string;
    subHeader: string;
    numberText: string;
}

export type BackendInfo = Partial<FrontendInfo>;

export interface FrontendInfos {
    rows: FrontendInfo[];
}

const rawsFrontendInfo$ = new BehaviorSubject<FrontendInfos[]>([]);
const rawsBackendInfo$ = new BehaviorSubject<BackendInfo[]>([]);

const frontendInfo$ = rawsFrontendInfo$.pipe(
    map((frontendInfo) =>
        frontendInfo.map((f) => ({
            ...f,
        })),
    ),
);

fetch('../assets/data/front-end-info.json')
    .then((res) => res.json())
    .then((data) => {
        return rawsFrontendInfo$.next(data);
    });

fetch('../assets/data/backend-info.json')
    .then((res) => res.json())
    .then((data) => rawsBackendInfo$.next(data));

const AssignmentContext = createContext({ rawsFrontendInfo$, rawsBackendInfo$ });

export const useAssignment = () => {
    return useContext(AssignmentContext);
};

export type AssignmentProps = {
    children: JSX.Element;
};

export const AssignmentProvider: React.FunctionComponent<AssignmentProps> = ({ children }) => {
    return (
        <AssignmentContext.Provider value={{ rawsFrontendInfo$, rawsBackendInfo$ }}>
            {children}
        </AssignmentContext.Provider>
    );
};
