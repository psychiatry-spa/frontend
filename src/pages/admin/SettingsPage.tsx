import AdminLayout from "../../layouts/admin/AdminLayout";
import { useCallback, useEffect, useRef, useState } from "react";
import InputField from "../../components/common/login-form/components/InputField";
import Button from "../../components/common/buttons/Button";

interface StringObject {
  [key: string]: string;
}

const SettingsPage: React.FC = () => {
  const [avatar, setAvatar] = useState<string>(
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("Max Maxbetov");
  const [passwordData, setPasswordData] = useState<StringObject>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const initialDataRef = useRef(fullName);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      !fullName ||
      JSON.stringify(initialDataRef.current) === JSON.stringify(fullName)
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [fullName]);
  // handleClick
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // handleChange
  const handleFullNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFullName(e.target.value);
    },
    []
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPasswordData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );
  // handleSubmit
  const handlePasswordSubmit = () => {
    console.log("handlePasswordSubmit");
  };

  return (
    <AdminLayout>
      <div>
        <img
          className="size-72 rounded-full mx-auto"
          src={avatar}
          onClick={handleAvatarClick}
          alt="avatar"
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <form>
        <InputField
          name="fullName"
          data={fullName || ""}
          type="fullName"
          handleChange={handleFullNameChange}
        />
        <Button
          style="primary"
          disabled={isDisabled}
          type="submit"
          styles="my-5 text-2xl font-medium"
        >
          Save changes
        </Button>
      </form>
      <h2>Change password</h2>
      <form onSubmit={handlePasswordSubmit}>
        <InputField
          data={passwordData.oldPassword || ""}
          type="password"
          name="oldPassword"
          handleChange={handlePasswordChange}
          placeholder="Old password"
        />
        <InputField
          data={passwordData.newPassword || ""}
          type="password"
          name="newPassword"
          handleChange={handlePasswordChange}
          placeholder="New password"
        />
        <InputField
          data={passwordData.confirmPassword || ""}
          type="password"
          name="confirmPassword"
          handleChange={handlePasswordChange}
          placeholder="Confirm new password"
        />
        <Button style="primary" type="submit">
          Change Password
        </Button>
      </form>
    </AdminLayout>
  );
};

export default SettingsPage;
