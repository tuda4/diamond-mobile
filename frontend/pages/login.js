
import React, { useEffect} from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../ultis/error';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';

export default function LoginScreen() {
  const {data: session} = useSession()
  const  router = useRouter()
  const { redirect} = router.query
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, redirect, session])
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err))
    }
  };

  return (
    <Layout title={'Đăng nhập'}>
      <div
        className={`xl:container flex lg:mx-20 m-10 p-2 sm:border sm:border-gray-200 justify-center`}
      >
        <div className="max-w-screen-md w-full">
          <h1 className="text-6xl font-semibold text-center p-1 top-1/3 text-gray-600 ">
            DIAMOND<span className="text-xl">.mobile</span>
          </h1>
          <h3 className="uppercase font-medium text-center p-1">Đăng nhập</h3>
          <form
            className={`flex flex-col items-center`}
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="flex flex-col gap-2 p-1 max-w-screen-sm w-full">
              <label htmlFor="email" className="w-28">
                Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-1 border border-gray-400"
                autoFocus
                {...register('email', {
                  required: 'Vui lòng nhập tài khoản của bạn!',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Vui lòng nhập đúng định dạng email!',
                  },
                })}
              ></input>
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className="flex flex-col gap-2 max-w-screen-sm p-1 w-full">
              <label htmlFor="password" className="w-24">
                Password:
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-1 border border-gray-400"
                {...register('password', {
                  required: 'Vui lòng điền mật khẩu',
                  minLength: { value: 6, message: 'Mật khẩu từ 6-14 kí tự.' },
                  maxLength: { value: 14, message: 'Mật khẩu từ 6-14 kí tự.' },
                })}
              ></input>
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>
            <i className="text-sm relative ">Quên mật khẩu ?</i>
            <button
              type="submit"
              className="w-fit py-1 px-4 text-center my-1 bg-gray-200"
            >
              Đăng nhập
            </button>
            <h3 className="max-w-screen-sm text-center">
              Chức năng đăng ký đang được phát triển, <i className='text-red-500'>Diamond</i> sẽ cập nhật trong
              thời gian tới...{' '}
            </h3>
          </form>
        </div>
      </div>
    </Layout>
  );
}
