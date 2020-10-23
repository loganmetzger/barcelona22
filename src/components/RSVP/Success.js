import React from "react";

export default function Success(props) {
  const { trigger } = props;

  return (
    <div>
      <h3>
        We'll see you in Barcelona {trigger.switch1.name} and{" "}
        {trigger.switch2.name}
      </h3>
    </div>
  );
}
