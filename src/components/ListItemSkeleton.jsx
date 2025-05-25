function ListItemSkeleton(props) {
    return (
        <div class="ListItemSkeleton mx-auto p-4 rounded-md border border-[#c4c4c4]">
            <div class="flex animate-pulse space-x-4">
                <div class="size-16 rounded-md bg-gray-200"></div>
                <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 w-lg rounded bg-gray-200"></div>
                    <div class="h-2 w-40 rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
    );
}

export default ListItemSkeleton;
