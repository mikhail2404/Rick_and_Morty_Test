export interface InfoState {
    count: number,
    pages: number
    currentURL: null | string,
    currentPage: number
}

export interface Info {
    "count": number,
    "pages": number,
    "next": string | null,
    "prev": null | string
}