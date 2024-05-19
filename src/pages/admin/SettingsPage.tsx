import AdminLayout from "../../layouts/admin/AdminLayout";
import { useCallback, useEffect, useRef, useState } from "react";
import InputField from "../../components/common/login-form/components/InputField";
import Button from "../../components/common/buttons/Button";
import useFetchData from "../../hooks/api/useFetchData";
import { API_ENDPOINTS } from "../../constants";
import useSubmitForm from "../../hooks/api/useSubmitForm";

interface StringObject {
  [key: string]: string;
}

const SettingsPage: React.FC = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<StringObject>({
    password: "",
  });
  const [newPassword, setNewPassword] = useState<StringObject>({
    newPassword: "",
    confirmPassword: "",
  });
  const initialDataRef = useRef(fullName);
  const initialAvatarData = useRef(avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = useFetchData(API_ENDPOINTS.currentUser);
      const response = await currentUser();
      if (response.ok) {
        const data = await response.data.profile;
        setAvatar(data.imageUrl || "");
        setFullName(data.fullName || "");
        initialDataRef.current = data.fullName || "";
        initialAvatarData.current = data.avatar || "";
      } else {
        console.error("Failed to fetch current user");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (initialAvatarData.current !== avatar) {
      setIsDisabled(false);
    } else if (
      !fullName ||
      JSON.stringify(initialDataRef.current) === JSON.stringify(fullName)
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [fullName, avatar]);
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
      if (name === "password") {
        setCurrentPassword({
          password: name,
        });
      } else {
        setCurrentPassword((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    },
    []
  );
  // handleSubmit
  const handlePasswordSubmit = useCallback(async () => {
    const submitForm = useSubmitForm(API_ENDPOINTS.signIn);
    const response = await submitForm();
  }, [currentPassword, newPassword]);

  return (
    <AdminLayout>
      <div>
        <img
          className="size-72 object-contain rounded-full mx-auto cursor-pointer hover:brightness-75 transition duration-300"
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
        <input
          className="text-3xl text-center mt-4 mx-auto block w-96 bg-primary-005 outline-none"
          name="fullName"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <Button
          style="primary"
          disabled={isDisabled}
          type="submit"
          styles="my-5 text-2xl font-medium mx-auto block px-2"
        >
          Save changes
        </Button>
      </form>
      <h2 className="text-3xl text-center font-bold text-primary">
        Change password
      </h2>
      <form onSubmit={handlePasswordSubmit}>
        <InputField
          styles="md:w-96 mx-auto"
          data={currentPassword.password || ""}
          type="password"
          name="oldPassword"
          handleChange={handlePasswordChange}
          placeholder="Old password"
          autocomplete="current-password"
        />
        <InputField
          styles="md:w-96 mx-auto"
          data={newPassword.newPassword || ""}
          type="password"
          name="newPassword"
          handleChange={handlePasswordChange}
          placeholder="New password"
          autocomplete="new-password"
        />
        <InputField
          styles="md:w-96 mx-auto"
          data={newPassword.confirmPassword || ""}
          type="password"
          name="confirmPassword"
          handleChange={handlePasswordChange}
          placeholder="Confirm new password"
          autocomplete="new-password"
        />
        <Button
          styles="px-2 mx-auto block text-xl font-bold mt-2"
          style="primary"
          type="submit"
        >
          Change Password
        </Button>
      </form>
    </AdminLayout>
  );
};

export default SettingsPage;
