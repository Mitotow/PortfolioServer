"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProject = void 0;
/**
 * Checks if an object is of type Project
 *
 * @param obj - The object to check
 * @returns A boolean value indicating whether the object is of type Project
 */
const isProject = (obj) => {
    return (typeof obj.title === "string" &&
        typeof obj.subtitle === "string" &&
        typeof obj.text === "string" &&
        typeof obj.git === "string" &&
        obj.used.every((item) => typeof item === "string"));
};
exports.isProject = isProject;
