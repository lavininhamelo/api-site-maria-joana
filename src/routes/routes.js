import { Router } from 'express'
import ProductController from '../controllers/ProductController'
import CourseController from '../controllers/CourseController'

const router = new Router()

router.get('/', function (req, res) {
  return res.json({
    message: 'Maria Joana'
  })
})

router.get('/products', ProductController.getAllProducts)
router.get('/products/:id', ProductController.getProduct)
router.post('/products', ProductController.createProduct)
router.put('/products/:id', ProductController.editProduct)
router.delete('/products/:id', ProductController.deleteProduct)
router.get('/courses', CourseController.getAllCourses)
router.get('/courses/:id', CourseController.getCourse)
router.delete('/courses/:id', CourseController.deleteCourse)
router.post('/courses', CourseController.createCourse)
router.put('/courses/:id', CourseController.editCourse)

export default router
