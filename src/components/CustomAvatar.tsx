import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export function CustomAvatar({ name, size = "md" }: Props) {
  const src = `/avatars/${name}.svg`;
  const sizeClass = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
    xl: "w-16 h-16 text-lg",
  }[size];

  const className = `${sizeClass} select-none bg-gray-100`;

  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={name} draggable={false} />
      <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
