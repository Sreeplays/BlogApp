const ArticleDetailSkeleton = () => {
  return (
    <div className="w-full rounded-lg shadow-md p-4 bg-slate-100">
      {/* Image */}
      <div className="w-full aspect-video skeleton" />

      {/* Title */}
      <div className="mt-4 h-4 w-3/4 skeleton" />

      {/* Meta info */}
      <div className="mt-2 h-3 w-1/2 skeleton" />

      {/* Excerpt */}
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full skeleton" />
        <div className="h-3 w-5/6 skeleton" />
        <div className="h-3 w-2/3 skeleton" />
      </div>
    </div>
  );
};

export default ArticleDetailSkeleton;
