type Props = {
  count: number;
  onClick: () => void;
};

export default function MyButton(props: Props) {
  return <button onClick={props.onClick}>Clicked {props.count} times</button>;
}
