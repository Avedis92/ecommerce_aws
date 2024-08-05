import { IField } from "../../../shared/types";

export type ISelectFieldProp = Omit<IField, "error" | "type" | "placeholder">;
