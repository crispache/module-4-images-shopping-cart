import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  imgUrl: string;
}

export const CardComponent: React.FC<Props> = (props) => {
  const { title, imgUrl } = props;

  return (
    <Card sx={{ width: 345, height: 385 }} variant="outlined">
      <CardMedia
        component="img"
        height={260}
        width={200}
        image={imgUrl}
        alt="Foto"
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <CardActions>
        <Checkbox color="primary" size="medium" />
      </CardActions>
    </Card>
  );
};
