import { Vue } from "vue-property-decorator";

export interface PageDetails{
    pageNumber: number,
    pageSize: number;
}

export interface Response{
    succeeded: boolean,
    message: string | null,
    error: string | null,
    errors: string[] | null,
    data: any
}

export interface ResponseGrid extends Response{
    pageNumber: number,
    pageSize: number,
}

export class Toast {
    static success(instance: Vue, message: string, title: string, duration: number = 6000) {
        instance.$notify({
            group: "boilerplate",
            title: title,
            text: message,
            duration: duration,
            type: "success"
        });
    }

    static warning(instance: Vue, message: string, title: string, duration: number = 6000) {
        instance.$notify({
            group: "boilerplate",
            title: title,
            text: message,
            duration: duration,
            type: "warn"
        });
    }

    static alert(instance: Vue, message: string, title: string, duration: number = 6000) {
        instance.$notify({
            group: "boilerplate",
            title: title,
            text: message,
            duration: duration,
            type: "error"
        });
    }

    static confirm(instance: Vue, title: string, callback: any) {
        instance.$confirm(title).then(callback);
    }

    static prompt(instance: Vue, title: string, callback: any) {
        instance.$prompt(title).then((text) => callback);
    }
}
