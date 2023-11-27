<template>
  <div>
    <div class="box is-hidden-mobile">
      <div class="columns">
        <div class="column is-half py-0">
          <div class="navbar-start is-hidden-mobile ">
            <img src="airplane.jpg" width="10%" />
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
          <img src="airplane.jpg" alt="airplanelogo" width="61" height="48">
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
    <div class="centered has-text-weight-bold has-text-white is-hidden-mobile">پرواز داخلی</div>
    <div class="is-hidden-mobile test  is-flex">
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
    <div class="box is-hidden-desktop menu">
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
      <div class="vl"></div>
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

    <div class="box tab mt-6">
      <div class="field is-hidden-desktop">
        <div class="control">
          <label class="radio box has-background-info has-text-white has-text-weight-bold">
            <input class="tag" type="radio" name="question">
            یک طرفه
          </label>
          <label class="radio box has-background-grey-light has-text-white has-text-weight-bold">
            <input class="tag" type="radio" name="question">
            رفت و برگشت
          </label>
        </div>
      </div>
      <div class="field is-hidden-mobile">
        <div class="control">
          <label class="radio box has-background-info has-text-white has-text-weight-bold">
            <input class="tag" type="radio" name="question">
            یک طرفه
          </label>
          <label class="radio box has-background-grey-light has-text-white has-text-weight-bold">
            <input class="tag" type="radio" name="question">
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
        <div class="circle">
          <img src="icons8-data-transfer.png" alt="icons8-data-transfer" class="pt-1">
        </div>
      </div>
    </div>
    <div class="columns mx-6">
      <div class="column mx-6 has-text-centered">

        <img src="blit.png" style="width: 50%;">
        <p class="pt-3 has-text-weight-bold has-text-centered has-text-weight-bold"> صدور آنلاین بلیط
        </p>
        <p class=" pt-4">کلیه مراحل خرید بلیط هواپیما، بلیط قطار، بلیط اتوبوس و رزو هتل و تور از سایت بصورت اینترنتی است
        </p>

      </div>
      <div class="column mx-6 has-text-centered">

        <img src="visa.png" style="width: 50%;">
        <p class=" pt-3 has-text-weight-bold has-text-centered has-text-weight-bold"> درخواست آنلاین ویزا
        </p>
        <p class="pt-4">ویزا را می توانید در هر زمان و مکان به صورت آنلاین درخواست دهید</p>

      </div>
      <div class="column mx-6 has-text-centered">

        <img src="support.png" style="width: 50%;">
        <p class="pt-3 has-text-weight-bold has-text-centered has-text-weight-bold"> پشتیبانی ۲۴ ساعته
        </p>
        <p class="pt-4">تیم مجرب پشتیبانی در تمام ۲۴ ساعت شبانه روز، آماده پاسخگویی به سوالات و مشکلات شماست</p>

      </div>

    </div>
    <div class="columns mx-6">
      <div class="column has-text-left photo-bold">
        <a class="">
          <img src="estanbol.jpg" alt="estanbol" class="brazil">
          <p class="titron-pic is-size-4 has-text-weight-bold has-text-white">
            خرید بلیط برزیل
          </p>
        </a>
      </div>
      <div class="column has-text-right photo-bold">
        <a class="">
          <img src="estanbol.jpg" alt="estanbol" class="brazil">
          <p class="titron-pic-left is-size-4 has-text-weight-bold has-text-white">
            خرید بلیط برزیل
          </p>
        </a>
      </div>
    </div>

    <p class="has-text-centered is-size-4">خرید آنلاین بلیط</p>
    <p class="is-size-5 has-text-weight-bold mr-6 mt-6">
      خرید بلیط آنلاین؟
    </p>
    <p class="is-size-6 mx-6 mt-4">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
      ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
      تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
      کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان
      مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    </p>
    <div class="has-text-centered my-4">
      <img src="Travel luggage.jpg" class="" alt="" style="width: 495px; height: 387px;">
    </div>
    <div class="columns mx-6">
      <div class="column mx-6">
        <p class="has-text-weight-bold ">
          خرید بلیط هواپیما داخلی
        </p>
        <p class="mt-4 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد.
        </p>
      </div>
      <div class="column mx-6">
        <p class="has-text-weight-bold ">
          خرید بلیط هواپیما داخلی
        </p>
        <p class="mt-4 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد.
        </p>
      </div>
    </div>
    <div class="columns mx-6 mt-6">
      <div class="column mx-6 has-background-grey-lighter">
        <p class="has-text-weight-bold ">
          خرید بلیط هواپیما داخلی
        </p>
        <p class="mt-4 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد.
        </p>
      </div>
      <div class="column mx-6 has-background-grey-lighter">
        <p class="has-text-weight-bold ">
          خرید بلیط هواپیما خارجی
        </p>
        <p class="mt-4 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد.
        </p>
      </div>
    </div>


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



