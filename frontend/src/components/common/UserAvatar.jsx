import { Avatar } from "@mui/material";

/* name থেকে stable color (refresh এ বদলাবে না) */
const stringToColor = (string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += value.toString(16).padStart(2, "0");
  }
  return color;
};

const UserAvatar = ({ avatar, name, size = 40 }) => {
  const avatarSrc = avatar
    ? avatar.startsWith("http")
      ? avatar
      : `http://localhost:5000${avatar}`
    : "";

  const letter = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <Avatar
      src={avatarSrc}
      sx={{
        width: size,
        height: size,
        bgcolor: avatar ? "transparent" : stringToColor(name || "user"),
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {letter}
    </Avatar>
  );
};

export default UserAvatar;