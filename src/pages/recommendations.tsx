import PageLayout from "@/components/layout/PageLayout";

export default function WorkHistoryPage() {
  return (
    <PageLayout>
      <div>
        {/* 실제 내용 */}
        <p>Company A - Software Engineer</p>
        <p>{"Company B - DevOps Engineer".repeat(999)}</p>
        {/* ... */}
      </div>
    </PageLayout>
  );
}
