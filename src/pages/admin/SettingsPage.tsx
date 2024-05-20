import AdminLayout from "../../layouts/admin/AdminLayout";
import { useCallback, useEffect, useRef, useState } from "react";
import InputField from "../../components/common/login-form/components/InputField";
import Button from "../../components/common/buttons/Button";
import { API_ENDPOINTS } from "../../constants";
import usePost from "../../api/base/usePost";
import useGet from "../../api/base/useGet";
import usePut from "../../api/base/usePut";
import { useValidation } from "../../hooks/useValidation";
import { FormErrorFlags } from "../../components/types";
import Modal from "../../components/admin/Modal";

interface StringObject {
  [key: string]: string;
}

interface PasswordState {
  password: string;
}

const SettingsPage: React.FC = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<PasswordState>({
    password: "",
  });
  const [newPassword, setNewPassword] = useState<StringObject>({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setError] = useState<FormErrorFlags>({
    incorrectError: false,
    passwordCharactersError: false,
    passwordError: false,
    fullNameError: false,
  })
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const initialDataRef = useRef(fullName);
  const initialAvatarData = useRef(avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // API
  const fetchCurrentUser = useGet<any>(API_ENDPOINTS.currentUser);
  const submitPasswordForm = usePost(API_ENDPOINTS.signIn);
  const changePassword = usePut(API_ENDPOINTS.currentUser);

  useEffect(() => {
    fetchCurrentUser.refetch().then((response) => {
      const data = response.data.profile;
      let imageUrl = data.imageUrl || "";
      if (imageUrl.includes("lh3.googleusercontent.com")) {
        imageUrl = imageUrl.replace(/=s\d+-c$/, "=s512");
      }
      setAvatar(imageUrl);
      setFullName(data.fullName || "");
      initialDataRef.current = data.fullName || "";
      initialAvatarData.current = imageUrl || "";
    });
  }, []);

  useEffect(() => {
    if (
      initialAvatarData.current === avatar &&
      (!fullName ||
        JSON.stringify(initialDataRef.current) === JSON.stringify(fullName))
    ) {
      setIsDisabled(true);
    } else if (!fullName && isDisabled === false) {
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
          [name]: value,
        });
      } else {
        setNewPassword((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    },
    []
  );
  // handleSubmit
  const handlePasswordSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (newPassword.newPassword !== newPassword.confirmPassword) {
        setPasswordError(true);
        return;
      }

      // const { errors: validationErrors } = useValidation(currentPassword)
      // if (validationErrors.length > 0) {
      //   const newErrors = {
      //     passwordCharactersError.includes
      //   }
      // }
      try {
        const authResult = await submitPasswordForm.post(currentPassword);
        if (!authResult.ok) {
          console.error("Error authenticating current password");
          return;
        }

        const changeResult = await changePassword.put({
          body: { password: newPassword },
        });
        if (changeResult.ok) {
          console.log("Password succesefully changed!");
        } else {
          console.error("Error changing password");
        }
      } catch (err) {
        console.log("An error occured while changing the password:", err);
      }
    },
    [currentPassword, newPassword, submitPasswordForm, changePassword]
  );

  // const handleProfileSubmit = useCallback(
  //   async (e.React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();


  //   }, [avatar, fullName])

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log('fwfewrfew')
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <form>
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
          onClick={handleOpenModal}
        >
          Change Password
        </Button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmModal} />
    </AdminLayout>
  );
};

export default SettingsPage;
