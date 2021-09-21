<template>
  <header>
    <nav class="container">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="" class="nav-link">Cole Tistan</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Services</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@use '../../assets/scss/variables.scss';

header {
  background: variables.$dark;
  padding: variables.$default-spacing;

  nav {
    color: variables.$light;

    .nav-list {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .nav-item {
        padding: 0 variables.$default-spacing - 0.5rem;
      }

      .nav-item:first-child {
        margin-right: auto;
        font-size: variables.$default-font-size + 0.5rem;
        font-weight: variables.$default-font-weight + 100;
        letter-spacing: variables.$default-spacing - 0.8rem;
      }

      .nav-item:nth-child(2),
      .nav-item:nth-child(3),
      .nav-item:nth-child(4),
      .nav-item:nth-child(5) {
        font-size: variables.$default-font-size + 0.025rem;
        letter-spacing: variables.$default-spacing - 0.9rem;
      }

      .nav-item:nth-child(5) {
        cursor: pointer;
        border: 2px solid variables.$success;
        border-radius: 99px;
        font-weight: variables.$default-font-weight + 100;
        padding: variables.$default-spacing - 0.5rem;
        margin-left: variables.$default-spacing - 0.5rem;
        transition: 150ms ease-in;

        &:hover {
          background: variables.$success;
        }
      }

      .nav-item:last-child {
        cursor: pointer;
        display: none;
        position: relative;


        .bar {
          background: variables.$light;
          display: block;
          width: 26px;
          height: 3px;
          margin: 5px;
          border-radius: 10rem;
        }
      }
    }
  }
}
</style>