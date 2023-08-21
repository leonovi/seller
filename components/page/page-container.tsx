export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>;
};