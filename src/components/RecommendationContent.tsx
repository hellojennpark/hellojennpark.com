"use client";

interface RecommendationContentProps {
  content: string[];
}

export const RecommendationContent = ({
  content,
}: RecommendationContentProps) => {
  return (
    <div className="overflow-y-auto max-h-[60dvh] space-y-2 px-2">
      {content.map((paragraph, idx) => (
        <p key={idx} className="text-sm leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
