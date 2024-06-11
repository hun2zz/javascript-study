class ShoppingCart {
  constructor() {
    //장바구니에 담은 producteㅡㄹ을 저장
    this.cartItmes = [];
  }
  render() {
    const $section = document.createElement("section");
    $section.classList.add("cart");
    $section.innerHTML = `
    <h2>총액 0원</h2>
    <button>주문하기</button>
    `;
    return $section;
  }
}

export default ShoppingCart;
