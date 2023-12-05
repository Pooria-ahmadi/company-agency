<template>
  <div>
    <img src="test1.jpg" style="width: 100%;">
    <div class="tittle-image has-text-weight-bold has-text-white is-hidden-mobile">پرواز داخلی</div>
    <div class="is-hidden-mobile tab-target  is-flex">
      <a class=" mx-4 buttons-menu has-text-centered" href="#">
        <img src="icon-airplane.png" width="50" height="50" alt="Domestic-flight" />
        <p class="has-text-white has-text-weight-bold">پرواز داخلی</p>
      </a>
      <a class=" mx-4 buttons-menu has-text-centered" href="#">
        <img src="International-flights.png" width="50" height="50" alt="Domestic-flight" />
        <p class="has-text-white has-text-weight-bold">پرواز خارجی</p>
      </a>
      <a class=" mx-4 buttons-menu has-text-centered" href="#">
        <img src="Hotel.png" width="50" height="50" alt="Domestic-flight" />
        <p class="has-text-white has-text-weight-bold"> هتل</p>
      </a>
      <a class=" mx-4 buttons-menu has-text-centered" href="#">
        <img src="Train.png" width="50" height="50" alt="Domestic-flight" />
        <p class="has-text-white has-text-weight-bold"> قطار</p>
      </a>
    </div>
    <div class="box is-hidden-desktop menu-mobile">
      <div class="columns is-flex">
        <a class="column has-text-right" href="#">
          <p class="has-text-black">
            <i class="fa-solid fa-plane-departure pl-1" style="color: #000000;"></i>
            پرواز
          </p>
        </a>
        <a href="#" class="column has-text-right">
          <p class="has-text-black">
            <i class="fa-solid fa-train pl-1" style="color: #000000;"></i>
            قطار
          </p>
        </a>
      </div>
      <div class="Menu-divisions"></div>
      <div class="columns is-flex">
        <a href="#" class="column has-text-right">
          <p class="has-text-black">
            <i class="fa-solid fa-hotel pl-1" style="color: #000000;"></i>
            هتل
          </p>
        </a>
        <a class="column has-text-right">
          <p class="has-text-black">
            <i class="fa-solid fa-umbrella-beach pl-1" style="color: #000000;"></i>
            تور
          </p>
        </a>
      </div>
    </div>

    <div class="box options-menu mt-6">
      <div class="field is-hidden-desktop">
        <div class="control">
          <label class="radio box has-background-info has-text-white has-text-weight-bold">
            <input class="border-options" type="radio" name="question">
            یک طرفه
          </label>
          <label class="radio box has-background-grey-light has-text-white has-text-weight-bold">
            <input class="border-options" type="radio" name="question">
            رفت و برگشت
          </label>
        </div>
      </div>
      <div class="field is-hidden-mobile">
        <div class="control">
          <label class="radio box has-background-info has-text-white has-text-weight-bold">
            <input class="border-options" type="radio" name="question">
            یک طرفه
          </label>
          <label class="radio box has-background-grey-light has-text-white has-text-weight-bold">
            <input class="border-options" type="radio" name="question">
            رفت و برگشت
          </label>
        </div>
      </div>
      <div class="is-flex">


        <div class="field ">
          <p class="control has-icons-left has-icons-right">
            <input class="input has-background-grey-lighter" type="text" placeholder="مبدا" style="width: 55%;">
            <span class="icon is-small is-right">
              <i class="fa-solid fa-location-dot" style="color: #595959;"></i>
            </span>
          </p>
        </div>
        <div class="move-button">
          <img src="icons8-data-transfer.png" alt="icons8-data-transfer" class="pt-1">
        </div>
      </div>
    </div>
    <div class="columns mx-6">
      <div class="column mx-6 has-text-centered">

        <img src="blit.png" style="width: 150px;">
        <p class="pt-3 has-text-weight-bold has-text-centered has-text-weight-bold"> صدور آنلاین بلیط
        </p>
        <p class=" pt-4">کلیه مراحل خرید بلیط هواپیما، بلیط قطار، بلیط اتوبوس و رزو هتل و تور از سایت بصورت اینترنتی است
        </p>

      </div>
      <div class="column mx-6 has-text-centered">

        <img src="visa.png" style="width: 150px;">
        <p class=" pt-3 has-text-weight-bold has-text-centered has-text-weight-bold"> درخواست آنلاین ویزا
        </p>
        <p class="pt-4">ویزا را می توانید در هر زمان و مکان به صورت آنلاین درخواست دهید</p>

      </div>
      <div class="column mx-6 has-text-centered">

        <img src="support.png" style="width: 150px;">
        <p class="pt-3 has-text-weight-bold has-text-centered has-text-weight-bold"> پشتیبانی ۲۴ ساعته
        </p>
        <p class="pt-4">تیم مجرب پشتیبانی در تمام ۲۴ ساعت شبانه روز، آماده پاسخگویی به سوالات و مشکلات شماست</p>

      </div>

    </div>
    <div class="columns mx-6 is-justify-content-center">
      <div class="column is-one-third">
        <a href="#">
          <div class="image-card">
            <img src="brazil.jpg" alt="brazil" class="tittle-picture">
            <p class="tittle-text-picture is-size-4 has-text-weight-bold has-text-white">
              خرید بلیط برزیل
            </p>
            <p class="subtittle-text-picture has-text-weight-bold has-text-white is-size-6">
              قدم سزدم کنار سواحل برزیل
            </p>
          </div>
        </a>
      </div>
      <div class="column is-one-third">
        <a href="#">
          <div class="image-card">
            <img src="ezmir.jpg" alt="estanbol" class="tittle-picture">
            <p class="tittle-text-picture is-size-4 has-text-weight-bold has-text-white">
              خرید بلیط ازمیر
            </p>
            <p class="subtittle-text-picture has-text-weight-bold has-text-white is-size-6">
              قدم زدن در سواحل ازمیر
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="columns mx-6 is-justify-content-center">
      <div class="column is-one-third">
        <a href="#">
          <div class="image-card">
            <img src="دوبی.jpg" alt="estanbol" class="tittle-picture">
            <p class="tittle-text-picture is-size-4 has-text-weight-bold has-text-white">
              خرید بلیط دوبی
            </p>
            <p class="subtittle-text-picture has-text-weight-bold has-text-white is-size-6">
              دیدن از شهر دوبی
            </p>
          </div>
        </a>
      </div>
      <div class="column is-one-third">
        <a href="#">
          <div class="image-card">
            <img src="estanbol.jpg" alt="estanbol" class="tittle-picture">
            <p class="tittle-text-picture is-size-4 has-text-weight-bold has-text-white">
              خرید بلیط استانبول
            </p>
            <p class="subtittle-text-picture has-text-weight-bold has-text-white is-size-6">
              دیدن از اماکن تاریخی استانبول
            </p>
          </div>
        </a>
      </div>
    </div>

    <p class="has-text-centered is-size-4">خرید آنلاین بلیط</p>
    <div class="columns is-justify-content-center">
      <div class="column is-two-thirds">
        <p class="is-size-5 has-text-weight-bold mr-6 mt-6">
          خرید بلیط آنلاین؟
        </p>
        <p class="is-size-6 mx-6 mt-4 line-height">
          با قابلیت پرداخت آنلاین امن ، شما می‌توانید هزینه بلیط‌تان را به راحتی پرداخت کرده و بلیط الکترونیکی خود را
          دریافت کنید. امکان ارسال کد رزرو و بلیط الکترونیکی به ایمیل یا پیامک برای شما فراهم است. همچنین، در صورت نیاز
          می‌توانید بلیط‌های خود را مدیریت کنید و یا حتی تغییر دهید.
        </p>
      </div>
    </div>
    <div class="has-text-centered my-4">
      <img src="Travel luggage.jpg" alt="" style="width: 495px; height: 387px;">
    </div>
    <div class="columns mx-6 is-centered">
      <div class="column is-two-fifths mt-6">
        <p class="has-text-weight-bold ">
          خرید بلیط هواپیما داخلی
        </p>
        <p class="mt-4 line-height">
          شما می‌توانید بلیط‌های هواپیما را از شرکت‌های هواپیمایی مختلف بررسی کرده و قیمت‌ها، تاریخ‌ها و زمان‌های پرواز را
          مقایسه کنید. همچنین دسترسی به امکاناتی مانند نقشه صندلی‌ها ، اطلاعات پرواز، زمان حرکت، همچنین نام خط هواپیمایی و
          شماره پرواز نیز در اختیار شما قرار می‌گیرد.
        </p>
      </div>
      <div class="column is-two-fifths mt-6">
        <p class="has-text-weight-bold ">
          خرید بلیط هواپیما خارجی
        </p>
        <p class="mt-4 line-height">
          شما می‌توانید بلیط‌های هواپیما را از شرکت‌های هواپیمایی مختلف بررسی کرده و قیمت‌ها، تاریخ‌ها و زمان‌های پرواز را
          مقایسه کنید. همچنین دسترسی به امکاناتی مانند نقشه صندلی‌ها ، اطلاعات پرواز، زمان حرکت، همچنین نام خط هواپیمایی و
          شماره پرواز نیز در اختیار شما قرار می‌گیرد.
        </p>
      </div>
    </div>
    <div class="columns mx-6 is-centered">
      <div class="column has-background-grey-lighter border-all-image mt-6 is-one-third mx-3">
        <p class="has-text-weight-bold ">
          هتل خارجی
        </p>
        <p class="mt-4 line-height">
          سمیر گشت با بهره‌گیری از تکنولوژی روز دنیا و حذف واسطه‌ها توانسته کامل‌ترین مرجع جستجو، مقایسه و رزرو هتل های
          خارجی را راه‌اندازی کند.
        </p>
      </div>
      <div class="column has-background-grey-lighter border-all-image mt-6 is-one-third mx-3">
        <p class="has-text-weight-bold ">
          هتل داخلی
        </p>
        <p class="mt-4 line-height">
          سمیر گشت به عنوان هوشمندترین مرجع رزرو آنلاین هتل داخلی در ایران تلاش می‌کند تا با فراهم کردن دسترسی شما به
          تمامی هتل های داخلی از اقامت راحت و بی دردسر خود در یکی از شهرهای ایران لذت ببرید.
        </p>
      </div>
    </div>
    <div class="columns is-centered is-vcentered my-6 mx-6">
      <div class="column">
        <p class="has-text-weight-bold">سفر کارت چیست؟</p>
        <p class="mt-4 line-height">سفر کارت یک بسته سفره که با خرید آن می توان سفر را در خانواده برای باال بردن سطح
          کیفیت زندگی با توجه به مشکالت روزمره باال برد،این کارت ها هم از لحاظ هزینه و هم از لحاظ کیفیت میتواند نظر
          استفاده کنندگان را تامین کند ...</p>
        <div class="has-text-centered mt-6">
          <button class="button is-light">ادامه مطلب...</button>
        </div>

      </div>
      <div class="column has-text-centered">
        <img src="safar-card.jpg" alt="" class="border-all-image">
      </div>
    </div>
    <div class="columns is-centered is-vcentered my-6 mx-6">
      <div class="column has-text-centered">
        <img src="laptab.jpg" alt="" class="border-all-image" style="width: 300px;">
      </div>
      <div class="column">
        <p class="has-text-weight-bold"> چرا باید سفر کارت بخرید : </p>
        <ul>
          <li class="mt-4 line-height">ما سفر رفتن رو برای شما راحت میکنیم. ما شمارو از تورم نجات میدیم.</li>
          <li class="mt-4 line-height">ما به شما حریم خصوصی سفر میدیم.</li>
          <li class="mt-4 line-height">ما به شما قدرت تصمیم گیری برای زمان و مکان سفر میدهیم. </li>
          <li class="mt-4 line-height">ما به شما زمان کنار خانواده بودن را هدیه میدهیم.</li>
          <li class="mt-4 line-height">ما برای شما خاطره به جا میگذاریم.</li>
          <li class="mt-4 line-height">ما شمارو از تورم نجات میدیم.</li>
        </ul>
      </div>
    </div>
    <div style="text-align: center">
      <img style="vertical-align:middle; width: 50px;" src="question-mark.png" alt="">
      <span class="has-text-weight-bold" style="vertical-align:middle">سوالات متداول</span>
    </div>
    <div class="columns is-justify-content-center mt-3">
      <div class="column is-two-thirds has-background-grey-lighter Question-box">
        <p class="is-size-6 has-text-weight-bold ">
          چند روز قبل از پرواز، بلیط هواپیما را بخریم ؟
          <img src="down-arrow.png" alt="" class="img-question">
        </p>
      </div>
    </div>
    <div class="columns is-justify-content-center mt-3">
      <div class="column is-two-thirds has-background-grey-lighter Question-box">
        <p class="is-size-6 has-text-weight-bold ">
          نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟
          <img src="down-arrow.png" alt="" class="img-question">
        </p>
      </div>
    </div>
    <div class="columns is-justify-content-center mt-3">
      <div class="column is-two-thirds has-background-grey-lighter Question-box">
        <p class="is-size-6 has-text-weight-bold ">
          آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟
          <img src="down-arrow.png" alt="" class="img-question">
        </p>
      </div>
    </div>
    <div class="columns is-justify-content-center mt-3">
      <div class="column is-two-thirds has-background-grey-lighter Question-box">
        <p class="is-size-6 has-text-weight-bold ">
          آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟
          <img src="down-arrow.png" alt="" class="img-question">
        </p>
      </div>
    </div>
    <div class="columns is-justify-content-center mt-3 mb-6">
      <div class="column is-two-thirds  has-background-grey-lighter Question-box">
        <p class="is-size-6 has-text-weight-bold ">
          رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟
          <img src="down-arrow.png" alt="" class="img-question">
        </p>
      </div>
    </div>
  </div>
</template>

