import React from "react";
import { Pagination, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Row className="justify-content-md-center">
        <Col sm="auto">
          <Pagination>
            {[...Array(pages).keys()].map(x => (
              <LinkContainer
                key={x + 1}
                to={
                  !isAdmin
                    ? keyword
                      ? `/search/${keyword}/page/${x + 1}`
                      : `/page/${x + 1}`
                    : `/admin/productlist/${x + 1}`
                }
              >
                <Pagination.Item active={x + 1 === page}>
                  {x + 1}
                </Pagination.Item>
              </LinkContainer>
            ))}
          </Pagination>
        </Col>
      </Row>
    )
  );
};

export default Paginate;
