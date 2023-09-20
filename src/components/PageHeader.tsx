type PageHeaderProps = {
  pageName: string;
};

const PageHeader = ({ pageName }: PageHeaderProps) => {
  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl">{pageName}</h1>
      <p>Some content on the {pageName} could go here.</p>
    </div>
  );
};

export { PageHeader };
