<template>
    <div class="bg-[#79B4DE] bg-opacity-20 h-[73vh] font-[IRANYekan]">
        <!-- Navbar -->
        <nav class="container mx-auto md:flex md:flex-row items-start flex justify-center">
            <div class="md:flex md:flex-row md:w-full md:justify-around md:p-4 flex flex-col">
                <div class="md:flex md:flex-row items-center flex flex-col">
                    <img class="w-20 h-20 md:ml-10 mt-5 md:mt-0" src="./../../public/images/logo.png" alt="logo">
                    <ul class="md:flex md:flex-row md:gap-0 md:mt-0 flex flex-wrap gap-10 mt-5 justify-center">
                        <li class="md:pl-10 md:bg-transparent md:p-0 p-2 bg-gray-300 rounded-md "><a href="#">صفحه‌اصلی</a></li>
                        <li class="md:pl-10 md:bg-transparent md:p-0 p-2 bg-gray-300 rounded-md "><a href="#">معرفی‌سایت</a></li>
                        <li class="md:pl-10 md:bg-transparent md:p-0 p-2 bg-gray-300 rounded-md "><a href="#">خدمات‌همیاران</a></li>
                        <li class="md:pl-10 md:bg-transparent md:p-0 p-2 bg-gray-300 rounded-md "><a href="#">مشاوره‌همیار</a></li>
                    </ul>
                </div>
                <div class="md:flex md:flex-row md:mt-0 md:border-none items-center flex justify-center border-b-2 border-gray-400">
                    <button class="pl-5">ورود</button>
                    <button class="bg-[#1100d9] text-white px-4 py-2 rounded-lg my-7 md:my-0">ثبت‌نام</button>
                </div>
            </div>
        </nav>

        <!-- Hero -->
        <div class="container mx-auto w-full fle flex-row">
            <div class="mr-60 mt-7 space-y-7 ">
                <h1 class="text-5xl font-medium text-[#242867] leading-tight">
                    با
                    <span class="text-[#1400F7]">همیار‌ سلامت</span><br>
                    بیشتر مراقب خودت باش
                </h1>
                <p class="text-[#a8a8aa] text-sm font-normal">
                    با همیار سلامت میتونی خیلی زود آدرس مراکز درمانی و پیدا کنی و از خدمات اونا بهره‌مند بشی<br>
                    همچنین میتونی از مشاوره همیاران بهره‌مند بشی و دیگه نیازی به دکتر رفتن نیست
                </p>
                <div class="flex">
                    <button class="flex items-center bg-[#242867] rounded-lg px-5 py-2 text-[#e4e4e4] text-sm">
                        <svg class="ml-2" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 9.375L12.5 2.08333L21.875 9.375V20.8333C21.875 21.3859 21.6555 21.9158 21.2648 22.3065C20.8741 22.6972 20.3442 22.9167 19.7917 22.9167H5.20833C4.6558 22.9167 4.12589 22.6972 3.73519 22.3065C3.34449 21.9158 3.125 21.3859 3.125 20.8333V9.375Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.375 22.9167V12.5H15.625V22.9167" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        مراکز درمانی
                    </button>
                    <button class="flex items-center bg-[#242867] rounded-lg px-5 py-2 text-[#e4e4e4] text-sm mr-5">
                        <svg class="ml-2" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7083 21.875V19.7917C17.7083 18.6866 17.2693 17.6268 16.4879 16.8454C15.7065 16.064 14.6467 15.625 13.5417 15.625H5.20832C4.10325 15.625 3.04345 16.064 2.26204 16.8454C1.48064 17.6268 1.04166 18.6866 1.04166 19.7917V21.875" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.37501 11.4583C11.6762 11.4583 13.5417 9.59285 13.5417 7.29167C13.5417 4.99048 11.6762 3.125 9.37501 3.125C7.07382 3.125 5.20834 4.99048 5.20834 7.29167C5.20834 9.59285 7.07382 11.4583 9.37501 11.4583Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.9583 21.875V19.7917C23.9577 18.8685 23.6504 17.9716 23.0848 17.242C22.5192 16.5124 21.7272 15.9912 20.8333 15.7604" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.6667 3.26042C17.5629 3.4899 18.3573 4.01115 18.9246 4.74199C19.4919 5.47283 19.7998 6.3717 19.7998 7.29688C19.7998 8.22205 19.4919 9.12092 18.9246 9.85176C18.3573 10.5826 17.5629 11.1039 16.6667 11.3333" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        همیاران سلامت
                    </button>
                </div>
            </div>
            <img class="w-72 h-96 absolute left-[22rem] bottom-[15.5rem] " src="./../../public/images/doctor1.png" alt="imgHero">
        </div>
    </div>

    <!-- Serch Box -->
    <div class="flex px-10 pt-7 pb-16 w-fit bg-white rounded-lg shadow-md absolute right-72 bottom-32 font-[IRANYekan]">
        <button class="p-3 ml-2 bg-[#1100D9] text rounded-sm">
            <svg width="17" height="17" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4583 19.7917C16.0607 19.7917 19.7917 16.0607 19.7917 11.4583C19.7917 6.85596 16.0607 3.125 11.4583 3.125C6.85596 3.125 3.125 6.85596 3.125 11.4583C3.125 16.0607 6.85596 19.7917 11.4583 19.7917Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.875 21.875L17.3438 17.3438" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <div class="bg-[#f2f5ff] ml-3 flex items-center">
            <svg class="mx-2" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#474C7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#474C7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input class="bg-[#f2f5ff] rounded-sm w-96 placeholder:text-xs placeholder:text-[#A8AEB7]" type="text" placeholder="جستجوی مراکز درمانی">
        </div>
        <div class="bg-[#f2f5ff] flex items-center">
            <svg class="mx-2" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#474C7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 21L16.65 16.65" stroke="#474C7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input class="bg-[#f2f5ff] rounded-sm w-96 placeholder:text-xs placeholder:text-[#A8AEB7]" type="text" placeholder="جستجوی خدمات بهداشتی و درمانی">
        </div>
    </div>
</template>