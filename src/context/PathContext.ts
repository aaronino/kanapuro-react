import { createContext, Dispatch, SetStateAction } from 'react';
import { Path, Paths } from '../data/data';

// Context for setting/accessing current game path
// Uset setpath to set the path from within child components
type PathContextProps = {
    path: Path,
    setPath: Dispatch<SetStateAction<Path>>
};

export const PathContext = createContext<PathContextProps>({
    path: Paths[0],
    setPath: (prevState: SetStateAction<Path>) => prevState
});
