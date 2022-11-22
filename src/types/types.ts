export interface Cost {
    Wood: number;
    Food: number;
    Stone: number;
    Gold: number;
}

export interface RootObject {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    created_in: string;
    cost: Cost;
}

export interface Civilization {
    id: number;
    name: string;
    expansion: string;
    army_type: string;
    unique_unit: string[];
    unique_tech: string[];
    team_bonus: string;
    civilization_bonus: string[];
}

export interface Cost {
    Wood: number;
    Food: number;
    Stone: number;
    Gold: number;
}

export interface Structure {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    cost: Cost;
    build_time: number;
    hit_points: number;
    line_of_sight: number;
    armor: string;
    range: string;
    reload_time: number;
    attack: number;
    special: string[];
}

export interface Cost {
    Wood: number;
    Food: number;
    Stone: number;
    Gold: number;
}

export interface Technology {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    develops_in: string;
    cost: Cost;
    build_time: number;
    applies_to: string[];
}
