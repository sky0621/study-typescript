function StrongZero(target:any) {
  target.prototype.drink = function() {
    console.log("ストロングゼロを飲んだ");
  };
  return target;
}

@StrongZero
class SmallAnimal {
}

const sa = new SmallAnimal();
// sa.drink();
