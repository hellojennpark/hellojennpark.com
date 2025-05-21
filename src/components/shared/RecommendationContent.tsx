"use client";

interface RecommendationContentProps {
  content: string[];
}

export const RecommendationContent = ({
  content,
}: RecommendationContentProps) => {
  return (
    <div className="space-y-2 px-2">
      {content.map((paragraph, idx) => (
        <p key={idx} className="leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
