import { useCallback, useEffect, useRef, useState } from "react";
import { API_ENDPOINTS } from "../../../constants/index";
import Button from "../../common/buttons/Button";
import useGet from "../../../api/base/useGet";
import Modal from "../Modal";
import usePut from "../../../api/base/usePut";
import { useValidation } from "../../../hooks/useValidation";

const Settings = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const initialDataRef = useRef(fullName);
  const initialAvatarData = useRef(avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // API
  const fetchCurrentUser = useGet<any>(API_ENDPOINTS.currentUser);
  const changeCurrentUser = usePut<any>(API_ENDPOINTS.currentUser);

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
      setFullNameError(false);
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
  // handleSubmit
  const handleSubmitProfile = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { validationErrors } = useValidation({ fullName: fullName });
      if (validationErrors.includes("Invalid full name format")) {
        setFullNameError(true);
      }

      const response = await changeCurrentUser.put({
        body: { fullName, imageUrl: avatar },
      });
      if (response.ok) {
        console.log("Current user's profile information has been changed!");
      } else {
        console.error(
          "Error while trying to change current user's profile information"
        );
      }
    },
    [avatar, fullName, useValidation, changeCurrentUser]
  );
  // handle*

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmitProfile}>
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

        <div className="relative text-center mt-4 mx-auto block w-max group">
          <input
            className="text-3xl bg-transparent text-center  bg-primary-005 outline-none border-none"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <div
            className="absolite left-0 right-0 bottom-0 mx-auto h-0.5 bg-primary
          transition-all duration-300 ease-out w-0 group-hover:w-full"
          ></div>
        </div>
        {fullNameError && (
          <p className="text-red-500 text-sm text-center mt-1">
            Full name should only contain alphabetic characters and spaces.
          </p>
        )}
        <Button
          style="primary"
          disabled={isDisabled}
          type="submit"
          styles="my-5 text-2xl font-medium mx-auto block px-2"
        >
          Save changes
        </Button>
      </form>

      <Button
        styles="px-2 mx-auto block text-xl font-bold mt-10"
        style="primary"
        type="submit"
        onClick={handleOpenModal}
      >
        Change Password
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      />
    </>
  );
};

export default Settings;
