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
  isChecked: boolean;
  onChangeCheck: (isChecked: boolean) => void;
}

export const CardComponent: React.FC<Props> = (props) => {
  const { title, imgUrl, isChecked, onChangeCheck } = props;

  const onChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    onChangeCheck(checked);
  };

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
        <Typography variant="h6">{title} </Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          checked={isChecked}
          color="primary"
          size="medium"
          onChange={onChangeCheckbox}
        />
      </CardActions>
    </Card>
  );
};
