import {Entity} from '../seedwork/entity';

export class AnnotationType extends Entity {
    id: number;
    name: string;
    active: boolean;
    vectorType: VectorType;   // TODO Check if this actually works
    nodeCount: number;
    enableConcealed: boolean;
    enableBlurred: boolean;
}


export enum VectorType {
    INVALID,
    boundingBox,
    point,
    line,
    multiLine,
    polygon
}