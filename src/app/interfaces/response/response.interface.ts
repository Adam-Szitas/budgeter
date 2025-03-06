export interface HttpResponse {
    issue?: string;
    data?: any;
    type: 'success' | 'error' | 'warning' | 'pending' | 'info';
    code: number;
}
