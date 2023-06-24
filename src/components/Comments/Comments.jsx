import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { useGetCommentsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const filtervalue = useSelector((state) => state.filter);
  // console.log("filtervalue", filtervalue);
  const { data: comments } = useGetCommentsQuery();

  const handlevisibleComments = () => {
    return comments?.filter((comment) =>
      comment.content.toLowerCase().includes(filtervalue.filter.toLowerCase())
    );
  };

  const visibleComments = handlevisibleComments();
  return (
    comments && (
      <Grid>
        {visibleComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </Grid>
    )
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
