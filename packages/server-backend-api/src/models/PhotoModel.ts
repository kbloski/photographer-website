import { PhotoType } from "shared/src/types/PhotoType";
import { sequelize } from "../utils/db";
import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";

export class Photo
    extends Model<InferAttributes<Photo>, InferCreationAttributes<Photo>>
    implements PhotoType
{
    declare id: number;
    declare url: string;
    declare title: string;
    declare description?: string;
    declare album_id?: number;
}

Photo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        title: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate: {
                len: [2, 64],
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [0, 1024],
            },
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: true,
            },
        },
    },
    {
        sequelize,
    }
);
