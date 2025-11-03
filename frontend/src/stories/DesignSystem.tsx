import ColorPalettes from "./ColorPalettes";

function impossible(value: never): never {
  throw new Error(`impossible value: ${value}`);
}

type Props = {};
export function DesignSystem(props: Props) {
  return <ColorPalettes />;
}
