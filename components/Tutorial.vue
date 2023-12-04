<template>
  <div>
    <div class="box is-hidden-mobile">
      <div class="columns">
        <div class="column is-half py-0">
          <div class="navbar-start is-hidden-mobile ">
            <img src="logo.png" width="8%" />
            <a class="navbar-item mr-6" href="#">
              پرواز داخلی
            </a>
            <a class="navbar-item" href="#">
              پرواز خارجی
            </a>
            <a class="navbar-item" href="#">
              قطار
            </a>
            <a class="navbar-item" href="#">
              هتل
            </a>
          </div>

        </div>

        <div class="column is-half py-0">
          <div class="navbar-end is-hidden-mobile">

            <button class="button is-info is-rounded ml-6 has-text-weight-bold" width="20%">
              <img src="icons8-support-64.png" width="31px">
              <p class="pr-4">132232</p>
            </button>
            <button class="button is-success is-hovered has-text-weight-bold">ثبت نام | ورود</button>

          </div>
        </div>
      </div>
    </div>
    <nav class="navbar is-transparent is-hidden-desktop">
      <div class="navbar-brand is-flex-direction-row-reverse box py-0">
        <a class="is-hidden-desktop" href="https://bulma.io">
          <img src="logo.png" alt="airplanelogo" width="50" height="48">
        </a>
        <div class="navbar-burger" :class="active ? 'is-active' : ''" @click="showMobilemenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>


      <div class="navbar-menu pr-6 is-hidden-desktop" :class="active ? 'is-active' : ''">
        <ul>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-plane-departure pl-1" style="color: #000000;"></i>
              پرواز
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-train pl-1" style="color: #000000;"></i>
              قطار
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-hotel pl-1" style="color: #000000;"></i>
              هتل
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-umbrella-beach pl-1" style="color: #000000;"></i>
              تور
            </a>
          </li>
        </ul>
      </div>
    </nav>





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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود
          ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
          طلبد
          تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
          ایجاد
          کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان
          مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
          گیرد.
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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد.
        </p>
      </div>
      <div class="column is-two-fifths mt-6">
        <p class="has-text-weight-bold ">
          خرید بلیط هواپیما خارجی
        </p>
        <p class="mt-4 line-height">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد.
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
    

    <div class="columns has-background-grey-lighter">
      <div class="column has-text-centered">
        <img src="icons8-rating-64.png" alt="" style="width: 80px;">
        <p>
          معتبرترین عرضه‌کننده بلیط و محصولات گردشگری در ایران
        </p>
      </div>
      <div class="column has-text-centered">
        <img src="icons8-laptop-and-phone-48.png" alt="" style="width: 80px;">
        <p>
          ارائه تمامی خدمات سفر (پرواز، قطار، هتل و تور) برای مسافران
        </p>
      </div>
      <div class="column has-text-centered">
        <img src="icons8-support-48.png" alt="" style="width: 80px;">
        <p>
          پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <ul>
          <li class="has-text-weight-bold mt-6  mb-4">سمیر گشت</li>
          <li class=" mb-4"><a class="has-text-grey-dark"> تماس با ما</a></li>
          <li class=" mb-4"><a class="has-text-grey-dark"> درباره ما</a></li>
          <li class=" mb-4"><a class="has-text-grey-dark">چراسمیر گشت</a></li>
        </ul>
      </div>
      <div class="column has-text-centered">
        <ul>
          <li class="has-text-weight-bold mt-6  mb-4"> خدمات مشتریان</li>
          <li class=" mb-4"><a class="has-text-grey-dark">پرسش و پاسخ</a></li>
          <li class=" mb-4"><a class="has-text-grey-dark"> قوانین و مقررات</a></li>
          <li class=" mb-4"><a class="has-text-grey-dark">راهنمای خرید</a></li>
        </ul>
      </div>
      <div class="column has-text-centered">
        <ul>
          <li class="has-text-weight-bold mt-6  mb-4"> اطلاعات تکمیلی</li>
          <li class=" mb-4"><a class="has-text-grey-dark"> فروش سازمانی </a></li>
          <li class=" mb-4"><a class="has-text-grey-dark"> همکاری با سازمان ها</a></li>
          <li class=" mb-4"><a class="has-text-grey-dark"> سفر کارت سمیر گشت</a></li>
        </ul>
      </div>
      <div class="column has-text-centered is-two-fifths">
        <ul>
          <li class="mb-4">
            <img src="logo.png" alt="" style="width: 100px;">
          </li>
          <li class=" mb-4">
            <p>تلفن پشتیبانی : <a>091-00036700</a></p>
          </li>
          <li class=" mb-4">
            <p>آدرس دفتر: تهران _ هویزه</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="columns is-centered is-vcentered">
      <div class="column mx-5">
        <div class="social-networks pt-3">
          <p class="social-networks-text pr-4 has-text-weight-bold has-text-grey-dark pt-4 ml-6">با ما همراه باشید!</p>
          <a href="#">
            <img src="icons8-whatsapp-50.png">
          </a>
          <a href="#">
            <img src="icons8-telegram-50.png">
          </a>
          <a href="#">
            <img src="icons8-instagram-50.png">
          </a>
        </div>
      </div>
      <div class="column has-text-centered">
        <a>
          <img src="ENAMAD.png" alt="" style="width: 155px;">
        </a>
      </div>
    </div>
    <hr class="my-0">
    <p class="has-text-grey-dark mb-2 has-text-centered is-size-7">
      کلیه حقوق این وب‌سایت محفوظ و متعلق به آژانس مسافرتی بدرقه پرواز آرین می‌باشد.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: '',
      active: false,
      showNavbar: true,
      window: {
        width: 0,
        height: 0
      },
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.respNav();

  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;

    },
    respNav() {
      if (this.window.width <= 767) {
        this.isActive = true;
      }
      if (this.window.width >= 768) {
        this.isActive = false;
      }
    },
    showMobilemenu() {
      //this.navbarBurgers
      console.log('is-active');
      this.active = !this.active;
    }
  }
}


</script>



