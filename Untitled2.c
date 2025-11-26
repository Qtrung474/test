#include <stdio.h>

int findMax(int *arr, int n) {
    int max = *arr;
    int i;
    for (i = 1; i < n; i++) {
        if (*(arr + i) > max) {
            max = *(arr + i);
        }
    }
    return max;
}
int main() {
    int n;
    int i;
    printf("Nhap so luong phan tu n: ");
    scanf("%d", &n);
    int arr[n];
    for (i = 0; i < n; i++) {
