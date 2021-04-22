/** @format */
import Link from "next/link";

function MainNavigation() {
  <header>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>

    <nav>
      <ul>
        <li>
          <Link href="/posts">Post</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>;
}

export default MainNavigation;
