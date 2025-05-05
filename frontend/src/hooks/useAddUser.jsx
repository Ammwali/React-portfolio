import { message } from "antd";
import '@ant-design/v5-patch-for-react-19';
import { useState } from "react";

const useAddUser = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const addUser = async (values) => {
    try {
      setError(null);
      setLoading(true);

      const res = await fetch("http://localhost:4000/api/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 201) {
        message.success(data.message);
      } else if (res.status === 400 || res.status === 401) {
        setError(data.message);
      } else {
        message.error("Form submission failed");
      }
    } catch (error) {
      message.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, addUser };
};

export default useAddUser;
