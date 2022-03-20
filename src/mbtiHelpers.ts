import { types, matrix } from './mbtiMatrix'

export const mbtiScore = (from: string, to:string): number => { 

    try {
        const fromIdx = types.indexOf(from);
        const toIdx = types.indexOf(to);
        return matrix[fromIdx][toIdx];
    } catch(error: any) {
        return -1;
    }
    
}
