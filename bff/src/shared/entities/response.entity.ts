export class ResponseEntity {
    success: boolean;
    data?: string | any;
    message?: string | any;

    isOk(): boolean {
        return this.success;
    }

    isError(): boolean {
        return !this.success;
    }

    getData(): any {
        return this.data;
    }

    setData(data): any {
        this.data = data;
    }

    static success(message: string, data?: string | any) {
        const response = new ResponseEntity();
        response.success = true;
        response.data = data;
        response.message = message;
        return response;
    }

    static error(message: string | any) {
        const response = new ResponseEntity();
        response.success = false;
        response.message = message;
        return response;
    }
}
