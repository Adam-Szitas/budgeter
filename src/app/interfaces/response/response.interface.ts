export interface HttpResponse {
    issue?: any;
    data: any;
    type: 'success' | 'error' | 'warning' | 'pending' | 'info';
}
