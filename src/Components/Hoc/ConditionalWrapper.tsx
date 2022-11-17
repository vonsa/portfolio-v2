const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactNode;
  children: React.ReactNode;
}): any /* TODO: type this any */ => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
