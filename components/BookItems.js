import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Link from "next/link";

function BookItems({ book }) {
  return (
    <Col md={6}>
      <Link href="/book/[id]" as={`/book/${book.id}`}>
        <Card style={{ height: "100%" }}>
          <Card.Body>
            <Card.Text>
              <h3>{book.title.rendered}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: book.content.rendered }}
              ></div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default BookItems;
