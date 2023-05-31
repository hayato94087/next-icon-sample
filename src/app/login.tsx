import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Login() {
  return (
    <Link
      href="/login"
      className="bg-white-300 flex flex-row justify-center items-center rounded-lg px-2 pt-2 pb-2 border-[2px] border-main500 shadow-md space-x-2 md:px-4 w-[130px] border-[#fe9611]"
    >
      <FontAwesomeIcon icon={faRightToBracket} className="h-[20px]" color="#fe9611"/>
      <label className='text-black text-sm font-bold'>ログイン</label>
    </Link>
  );
}
