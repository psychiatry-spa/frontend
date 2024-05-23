import React, { useCallback, useState } from "react";
import InputField from "./login-form/components/InputField";

const ChangePassword = () => {
  const [newPassword, setNewPassword]
  const [newPassword, setNewPassoword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
    }, [])
  return (
    <>
      <InputField
        styles="md:w-96 mx-auto"
        data={newPassword || ""}
        type="password"
        name="newPassword"
        handleChange={handlePasswordChange}
        placeholder="New password"
        autocomplete="new-password"
      />
      <InputField
        styles="md:w-96 mx-auto"
        data={confirmPassword || ""}
        type="password"
        name="confirmPassword"
        handleChange={handlePasswordChange}
        placeholder="Confirm new password"
        autocomplete="new-password"
      />
    </>
  );
};

export default ChangePassword;
