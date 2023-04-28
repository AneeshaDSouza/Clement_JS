//o(n) time o(n) space
class Program {
  public int[] arrayOfProducts(int[] array) {
    int[] products = new int[array.length];
	int[] leftProducts = new int[array.length];
	int[] rightProducts = new int[array.length];
	int leftRunningProduct=1;
	int rightunningProduct =1;
	
	for( int i=0; i< array.length; i++){
		leftProducts[i] = leftRunningProduct;
		leftRunningProduct *= array[i];
	}
	
	for( int i=array.length-1; i>=0; i--){
		rightProducts[i] = rightunningProduct;
		rightunningProduct *= array[i];
	}
	
	for (int i=0; i< array.length ; i++ ){
			products[i] = leftProducts[i]*rightProducts[i];
		}
	
	return products;
}

}
