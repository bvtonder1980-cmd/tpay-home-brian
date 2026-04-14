import { Pagination } from "react-bootstrap";

export interface PaginationData {
    count: number;
    next: number | null;
    previous: number | null;
}

export default function TPayPagination({ pagination, handlePageChange, pageSize = 20 }: { pagination: PaginationData, handlePageChange: (page: number) => void, pageSize?: number | null }) {
    const totalPages = Math.ceil((pagination.count ?? 1) / (pageSize ?? 20));
    return (
        <div>
        {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
                <Pagination>
                    <Pagination.First 
                        onClick={() => handlePageChange(1)}
                        disabled={pagination.next === 1}
                    />
                    <Pagination.Prev 
                        onClick={() => handlePageChange(pagination.next ?? 1 - 1)}
                        disabled={(pagination.next ?? 1) === 1}
                    />

                    
                    
                    {/* Show page numbers */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = Math.max(1, pagination.next ?? 1 - 2) + i;
                        if (pageNum > totalPages) return null;
                        
                        return (
                            <Pagination.Item
                                key={pageNum}
                                active={pageNum === (pagination.next ?? 1)}
                                onClick={() => handlePageChange(pageNum)}
                            >
                                {pageNum}
                            </Pagination.Item>
                        );
                    })}
                    
                    <Pagination.Next 
                        onClick={() => handlePageChange(pagination.next ?? 1 + 1)}
                        disabled={(pagination.next ?? 1) === totalPages}
                    />
                    <Pagination.Last 
                        onClick={() => handlePageChange(totalPages)}
                        disabled={(pagination.next ?? 1) === totalPages}
                    />
                </Pagination>
            </div>
        )}
        </div>
    );
}