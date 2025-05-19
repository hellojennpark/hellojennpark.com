import PageLayout from "@/components/layout/PageLayout";

export default function WorkHistoryPage() {
  return (
    <PageLayout
      title="Work History"
      description="All companies I've worked for and what I did there."
    >
      <div className="space-y-4">
        {/* 실제 내용 */}
        <p>Company A - Software Engineer</p>
        <p>Company B - DevOps Engineer</p>
        {/* ... */}
      </div>
    </PageLayout>
  );
}
